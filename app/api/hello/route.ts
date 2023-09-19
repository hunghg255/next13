import { NextResponse } from 'next/server';

export async function GET(req: Request){
  try {
      return NextResponse.json({ message: 'reCAPTCHA verification successful' })
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}
