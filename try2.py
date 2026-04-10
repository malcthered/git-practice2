def glitch():
    try:
        return "Try" # The return statement in the try block will be executed, but the finally block will still be executed afterwards.
    finally: 
        return "Finally"  # The finally block will override the return statement in the try block, so "Finally" will be returned instead of "Try".
print(glitch())
