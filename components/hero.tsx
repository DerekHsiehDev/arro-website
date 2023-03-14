import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "./CheckIcon";
import { Box } from "./styles/box";
import { Flex } from "./styles/flex";

export const Hero = () => {
    return (
        <>
            <Flex
                css={{
                    width: "100vw",
                    height: "100vh",
                    "@sm": {
                    },
                    backgroundImage: "url(/bg.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative"
                }}
            >
                <Box
                    css={{
                        position: "absolute",
                        bottom: 150,
                        left: 150,
                    }}
                >
                    <Box
                        css={{
                            maxWidth: "600px",
                        }}
                    >
                        <Text
                            h1
                            css={{
                                display: "inline",
                            }}
                            color={"black"}
                        >
                            The modern cryptocurrency{" "}
                        </Text>
                        <Text
                            h1
                            css={{
                                display: "inline",
                            }}
                            color={"black"}
                        >
                            for{" "}
                        </Text>
                        <Text
                            h1
                            css={{
                                display: "inline",
                            }}
                            color="primary"
                        >
                            the people
                        </Text>
                    </Box>

                    <Text
                        css={{
                            color: "$accents8",
                            maxWidth: "600px",
                            pt: "$10"
                        }}
                        size={"$xl"}
                    >
                        Earn crypto while you socialize! Join the platform that rewards you for sharing your content and engaging with others.
                    </Text>

                    <Flex
                        css={{
                            gap: "$8",
                            pt: "$10",
                        }}
                        wrap={"wrap"}
                    >
                        <Button size="lg" css={{ borderRadius: "$pill" }}>Get Started</Button>
                    </Flex>
                </Box>
            </Flex>
            <Divider
                css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
            />
        </>
    );
};
