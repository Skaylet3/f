import { PrismaClient } from "@prisma/client";

const PrismaClientSingleTon = () => {
  return new PrismaClient();
};

declare global{
  var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleTon>;
}

export const prisma = globalThis.prismaGlobal ?? PrismaClientSingleTon();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;