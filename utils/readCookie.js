import { jwtVerify } from "jose";
import Cookies from "js-cookie";

export async function readCookie() {
  try {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    const auth = Cookies.get("auth") || null;
    const secretKeyUint8Array = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(auth, secretKeyUint8Array);
    return payload;
  } catch (e) {
    console.log("Error => ", e);
    return null;
  }
}
