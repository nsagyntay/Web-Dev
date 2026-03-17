from models import Animal, Dog, Cat


def main():
    animal = Animal("Charlie", 4, "black")
    dog = Dog("Max", 2, "golden", "Golden Retriever")
    cat = Cat("Luna", 3, "gray", True)

    animals = [animal, dog, cat]


    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        print("-" * 30)

    print(dog.fetch())
    print(cat.scratch())


if __name__ == "__main__":
    main()