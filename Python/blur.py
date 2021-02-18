from PIL import Image, ImageFilter

before = Image.open("./before.jpg")
after = before.filter(ImageFilter.BoxBlur(10))
after.save("after.jpg")
