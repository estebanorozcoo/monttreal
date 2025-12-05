warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 716e60e..687c7cc 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -13,8 +13,8 @@[m
         "cloudinary": "^2.5.1",[m
         "framer-motion": "^11.15.0",[m
         "mongoose": "^8.8.4",[m
[31m-        "next": "^16.0.7",[m
[31m-        "next-auth": "^5.0.0-beta.30",[m
[32m+[m[32m        "next": "^15.5.7",[m
[32m+[m[32m        "next-auth": "^4.24.13",[m
         "next-intl": "^4.5.8",[m
         "nodemailer": "^7.0.7",[m
         "react": "^18.3.1",[m
[36m@@ -24,6 +24,7 @@[m
         "yup": "^1.5.0"[m
       },[m
       "devDependencies": {[m
[32m+[m[32m        "@tailwindcss/postcss": "^4.1.17",[m
         "@testing-library/jest-dom": "^6.6.3",[m
         "@testing-library/react": "^16.1.0",[m
         "@types/bcryptjs": "^2.4.6",[m
[36m@@ -52,33 +53,17 @@[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
[31m-    "node_modules/@auth/core": {[m
[31m-      "version": "0.41.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@auth/core/-/core-0.41.0.tgz",[m
[31m-      "integrity": "sha512-Wd7mHPQ/8zy6Qj7f4T46vg3aoor8fskJm6g2Zyj064oQ3+p0xNZXAV60ww0hY+MbTesfu29kK14Zk5d5JTazXQ==",[m
[31m-      "license": "ISC",[m
[31m-      "dependencies": {[m
[31m-        "@panva/hkdf": "^1.2.1",[m
[31m-        "jose": "^6.0.6",[m
[31m-        "oauth4webapi": "^3.3.0",[m
[31m-        "preact": "10.24.3",[m
[31m-        "preact-render-to-string": "6.5.11"[m
[31m-      },[m
[31m-      "peerDependencies": {[m
[31m-        "@simplewebauthn/browser": "^9.0.1",[m
[31m-        "@simplewebauthn/server": "^9.0.2",[m
[31m-        "nodemailer": "^6.8.0"[m
[32m+[m[32m    "node_modules/@alloc/quick-lru": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=10"[m
       },[m
[31m-      "peerDependenciesMeta": {[m
[31m-        "@simplewebauthn/browser": {[m
[31m-          "optional": true[m
[31m-        },[m
[31m-        "@simplewebauthn/server": {[m
[31m-          "optional": true[m
[31m-        },[m
[31m-        "nodemailer": {[m
[31m-          "optional": true[m
[31m-        }[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/sponsors/sindresorhus"[m
       }[m
     },[m
     "node_modules/@aws-crypto/sha256-browser": {[m
[36m@@ -4146,9 +4131,9 @@[m
       }[m
     },[m
     "node_modules/@next/env": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.0.7.tgz",[m
[31m-      "integrity": "sha512-gpaNgUh5nftFKRkRQGnVi5dpcYSKGcZZkQffZ172OrG/XkrnS7UBTQ648YY+8ME92cC4IojpI2LqTC8sTDhAaw==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-4h6Y2NyEkIEN7Z8YxkA27pq6zTkS09bUSYC0xjd0NpwFxjnIKeZEeH591o5WECSmjpUhLn3H2QLJcDye3Uzcvg==",[m
       "license": "MIT"[m
     },[m
     "node_modules/@next/eslint-plugin-next": {[m
[36m@@ -4162,9 +4147,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-darwin-arm64": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.0.7.tgz",[m
[31m-      "integrity": "sha512-LlDtCYOEj/rfSnEn/Idi+j1QKHxY9BJFmxx7108A6D8K0SB+bNgfYQATPk/4LqOl4C0Wo3LACg2ie6s7xqMpJg==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-IZwtxCEpI91HVU/rAUOOobWSZv4P2DeTtNaCdHqLcTJU4wdNXgAySvKa/qJCgR5m6KI8UsKDXtO2B31jcaw1Yw==",[m
       "cpu": [[m
         "arm64"[m
       ],[m
[36m@@ -4178,9 +4163,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-darwin-x64": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.0.7.tgz",[m
[31m-      "integrity": "sha512-rtZ7BhnVvO1ICf3QzfW9H3aPz7GhBrnSIMZyr4Qy6boXF0b5E3QLs+cvJmg3PsTCG2M1PBoC+DANUi4wCOKXpA==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-UP6CaDBcqaCBuiq/gfCEJw7sPEoX1aIjZHnBWN9v9qYHQdMKvCKcAVs4OX1vIjeE+tC5EIuwDTVIoXpUes29lg==",[m
       "cpu": [[m
         "x64"[m
       ],[m
[36m@@ -4194,9 +4179,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-linux-arm64-gnu": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.0.7.tgz",[m
[31m-      "integrity": "sha512-mloD5WcPIeIeeZqAIP5c2kdaTa6StwP4/2EGy1mUw8HiexSHGK/jcM7lFuS3u3i2zn+xH9+wXJs6njO7VrAqww==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-NCslw3GrNIw7OgmRBxHtdWFQYhexoUCq+0oS2ccjyYLtcn1SzGzeM54jpTFonIMUjNbHmpKpziXnpxhSWLcmBA==",[m
       "cpu": [[m
         "arm64"[m
       ],[m
[36m@@ -4210,9 +4195,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-linux-arm64-musl": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.0.7.tgz",[m
[31m-      "integrity": "sha512-+ksWNrZrthisXuo9gd1XnjHRowCbMtl/YgMpbRvFeDEqEBd523YHPWpBuDjomod88U8Xliw5DHhekBC3EOOd9g==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-nfymt+SE5cvtTrG9u1wdoxBr9bVB7mtKTcj0ltRn6gkP/2Nu1zM5ei8rwP9qKQP0Y//umK+TtkKgNtfboBxRrw==",[m
       "cpu": [[m
         "arm64"[m
       ],[m
[36m@@ -4226,9 +4211,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-linux-x64-gnu": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.0.7.tgz",[m
[31m-      "integrity": "sha512-4WtJU5cRDxpEE44Ana2Xro1284hnyVpBb62lIpU5k85D8xXxatT+rXxBgPkc7C1XwkZMWpK5rXLXTh9PFipWsA==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-hvXcZvCaaEbCZcVzcY7E1uXN9xWZfFvkNHwbe/n4OkRhFWrs1J1QV+4U1BN06tXLdaS4DazEGXwgqnu/VMcmqw==",[m
       "cpu": [[m
         "x64"[m
       ],[m
[36m@@ -4242,9 +4227,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-linux-x64-musl": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.0.7.tgz",[m
[31m-      "integrity": "sha512-HYlhqIP6kBPXalW2dbMTSuB4+8fe+j9juyxwfMwCe9kQPPeiyFn7NMjNfoFOfJ2eXkeQsoUGXg+O2SE3m4Qg2w==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-4IUO539b8FmF0odY6/SqANJdgwn1xs1GkPO5doZugwZ3ETF6JUdckk7RGmsfSf7ws8Qb2YB5It33mvNL/0acqA==",[m
       "cpu": [[m
         "x64"[m
       ],[m
[36m@@ -4258,9 +4243,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-win32-arm64-msvc": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.0.7.tgz",[m
[31m-      "integrity": "sha512-EviG+43iOoBRZg9deGauXExjRphhuYmIOJ12b9sAPy0eQ6iwcPxfED2asb/s2/yiLYOdm37kPaiZu8uXSYPs0Q==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-CpJVTkYI3ZajQkC5vajM7/ApKJUOlm6uP4BknM3XKvJ7VXAvCqSjSLmM0LKdYzn6nBJVSjdclx8nYJSa3xlTgQ==",[m
       "cpu": [[m
         "arm64"[m
       ],[m
[36m@@ -4274,9 +4259,9 @@[m
       }[m
     },[m
     "node_modules/@next/swc-win32-x64-msvc": {[m
[31m-      "version": "16.0.7",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.0.7.tgz",[m
[31m-      "integrity": "sha512-gniPjy55zp5Eg0896qSrf3yB1dw4F/3s8VK1ephdsZZ129j2n6e1WqCbE2YgcKhW9hPB9TVZENugquWJD5x0ug==",[m
[32m+[m[32m      "version": "15.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-gMzgBX164I6DN+9/PGA+9dQiwmTkE4TloBNx8Kv9UiGARsr9Nba7IpcBRA1iTV9vwlYnrE3Uy6I7Aj6qLjQuqw==",[m
       "cpu": [[m
         "x64"[m
       ],[m
[36m@@ -6920,6 +6905,277 @@[m
         "@swc/counter": "^0.1.3"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@tailwindcss/node": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-csIkHIgLb3JisEFQ0vxr2Y57GUNYh447C8xzwj89U/8fdW8LhProdxvnVH6U8M2Y73QKiTIH+LWbK3V2BBZsAg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@jridgewell/remapping": "^2.3.4",[m
[32m+[m[32m        "enhanced-resolve": "^5.18.3",[m
[32m+[m[32m        "jiti": "^2.6.1",[m
[32m+[m[32m        "lightningcss": "1.30.2",[m
[32m+[m[32m        "magic-string": "^0.30.21",[m
[32m+[m[32m        "source-map-js": "^1.2.1",[m
[32m+[m[32m        "tailwindcss": "4.1.17"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-F0F7d01fmkQhsTjXezGBLdrl1KresJTcI3DB8EkScCldyKp3Msz4hub4uyYaVnk88BAS1g5DQjjF6F5qczheLA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "optionalDependencies": {[m
[32m+[m[32m        "@tailwindcss/oxide-android-arm64": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-darwin-arm64": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-darwin-x64": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-freebsd-x64": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-linux-arm64-musl": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-linux-x64-gnu": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-linux-x64-musl": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-wasm32-wasi": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.17",[m
[32m+[m[32m        "@tailwindcss/oxide-win32-x64-msvc": "4.1.17"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-android-arm64": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-BMqpkJHgOZ5z78qqiGE6ZIRExyaHyuxjgrJ6eBO5+hfrfGkuya0lYfw8fRHG77gdTjWkNWEEm+qeG2cDMxArLQ==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "arm64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "android"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-darwin-arm64": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-EquyumkQweUBNk1zGEU/wfZo2qkp/nQKRZM8bUYO0J+Lums5+wl2CcG1f9BgAjn/u9pJzdYddHWBiFXJTcxmOg==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "arm64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "darwin"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-darwin-x64": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-gdhEPLzke2Pog8s12oADwYu0IAw04Y2tlmgVzIN0+046ytcgx8uZmCzEg4VcQh+AHKiS7xaL8kGo/QTiNEGRog==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "x64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "darwin"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-freebsd-x64": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-hxGS81KskMxML9DXsaXT1H0DyA+ZBIbyG/sSAjWNe2EDl7TkPOBI42GBV3u38itzGUOmFfCzk1iAjDXds8Oh0g==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "x64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "freebsd"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-k7jWk5E3ldAdw0cNglhjSgv501u7yrMf8oeZ0cElhxU6Y2o7f8yqelOp3fhf7evjIS6ujTI3U8pKUXV2I4iXHQ==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "arm"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "os": [[m
[32m+[m[32m        "linux"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {[m
[32m+[m[32m      "version": "4.1.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-HVDOm/mxK6+TbARwdW17WrgDYEGzmoYayrCgmLEw7FxTPLcp/glBisuyWkFz/jb7ZfiAXAXUACfyItn+nTgsdQ==",[m
[32m+[m[32m      "cpu": [[m
[32m+[m[32m        "arm64"[m
[32m+[m[32m      ],[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m