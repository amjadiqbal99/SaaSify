import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth'; // Assuming you have a function to get the session

export async function GET(request: Request) {
    const session = await getSession(request);
    
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function PUT(request: Request) {
    const session = await getSession(request);
    
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, data } = await request.json();
    
    const updatedUser = await prisma.user.update({
        where: { id },
        data,
    });

    return NextResponse.json(updatedUser);
}