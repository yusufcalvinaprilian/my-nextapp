import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(req: NextRequest) {
	const res = NextResponse.next();
	return res;
}

// export const config = {
//     matcher: "/product",
// contoh 2 middleware
// matcher: ["/product", "/about"]
// }

export default withAuth(mainMiddleware, ["/profile", "/admin"]);
