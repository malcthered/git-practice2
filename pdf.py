from fpdf import FPDF

pdf = FPDF() # A4 size by default
pdf.add_page()  # Add a page
pdf.set_font("Arial", size=18) # Set font and size
pdf.cell(200, 10, txt="Hello World!", ln=True, align='C') # Add a cell
pdf.output("hello_world.pdf")