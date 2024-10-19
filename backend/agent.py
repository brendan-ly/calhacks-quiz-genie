from uagents import Agent, Context, Model


class TextPrompt(Model):
    text: str


class CodePrompt(Model):
    text: str


class TextResponse(Model):
    text: str


class Response(Model):
    text: str


agent = Agent(
    name="user",
    endpoint="http://localhost:8000/submit",
)


AI_AGENT_ADDRESS = "agent1qt70gnyr355uhlrxk68ralyhq2tx9xqj0d6a07r4twvvrtjgrmzjkgpgvq2"

prompts = [
    "What is the square root of 123456789?",
    "What is the tower of Hanoi problem? Write a recursive solution in Python.",
]


@agent.on_event("startup")
async def send_message(ctx: Context):
    for prompt in prompts:
        await ctx.send(
            AI_AGENT_ADDRESS,
            CodePrompt(
                text=prompt,
            ),
        )
        ctx.logger.info(f"Sent prompt to AI agent: {prompt}")


@agent.on_message(Response)
async def handle_response(ctx: Context, sender: str, msg: Response):
    ctx.logger.info(f"Received response from {sender}:")
    ctx.logger.info(msg.text)


if __name__ == "__main__":
    agent.run()