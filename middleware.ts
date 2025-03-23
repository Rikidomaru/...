// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

const blockedIps = ['181.214.196.206'];

export function middleware(request: NextRequest) {
  const ip = request.ip;
  if (ip && blockedIps.includes(ip)) {
    console.log(
      `Blocked IP=${ip} Country=${request.geo?.country} City=${request.geo?.city}`,
    );
    return new Response('Blocked.', { status: 451 });
  }

  return NextResponse.next();
}
