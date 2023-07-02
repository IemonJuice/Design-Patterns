// using flyweight pattern to solve task, "in project we use many languages.
//if you try to add a new programming language but with a different framework, nothing will change and you will get a reference to the object that was
class ProgrammingLanguage {
    constructor(language, framework) {
        this.language = language
        this.framework = framework
    }
}

class ProgrammingLanguageFactory {
    constructor() {
        this.languages = [];
    }

    create(language, framework) {
        const suspectedObject = this.getObject(language)
        if (suspectedObject) {
            return suspectedObject;
        }
        this.languages.push(new ProgrammingLanguage(language, framework))
        return new ProgrammingLanguage(language, framework);
    }

    getObject(language) {
        return this.languages.find(ProgrammingLanguage => ProgrammingLanguage.language === language)
    }
}

let factoryLang = new ProgrammingLanguageFactory();
const js = factoryLang.create('JavaScript', 'Angular')
console.log(js);
const cSharp = factoryLang.create('C#', '.NET');
console.log(cSharp);
const python = factoryLang.create('Python', 'Django')
console.log(python);
const anotherJS = factoryLang.create('JavaScript', 'React')
console.log(anotherJS);