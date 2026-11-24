const createUser = async () => {
    try {
        const user = await prisma.user.create({
            data: {
                name: "Aadarsh",
                email: "aadarsh@example.com",
                posts: {
                    create: [
                        {
                            title: "First Post by Aadarsh",
                            content: "This is the content for Aadarsh’s first post.",
                            published: true
                        },
                        {
                            title: "Second Post by Aadarsh",
                            content: "Content for Aadarsh’s second post.",
                            published: false
                        },
                        {
                            title: "Third Post by Aadarsh",
                            content: "Content for Aadarsh’s third post.",
                            published: true
                        }
                    ]
                }
            }
        });
        console.log("Seeding successful");
    } catch (error) {
        console.error("Error during seeding:", error);
    } 
};
createUser();