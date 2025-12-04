import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import User from '@/lib/models/User';
import { registerSchema } from '@/lib/validations';
import { sendWelcomeEmail } from '@/lib/nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    await registerSchema.validate(body);

    await connectDB();

    // Check if user exists
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(body.password, 12);

    // Create user
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      role: 'user',
    });

    // Send welcome email
    await sendWelcomeEmail(user.email, user.name);

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: (error as Error).message || 'Registration failed' },
      { status: 400 }
    );
  }
}

