import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string): Promise<void> {
    try {
        const res = await prisma.user.create({
            data: {
                email: username,
                password,
                firstname,
                lastname
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error inserting user:", error);
    }
}

// Call the function with appropriate arguments
insertUser("example@example.com", "password123", "John", "Doe");
