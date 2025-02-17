import grails.converters.JSON

class HelloController {

    def index() {
        render "Hello World"
    }

    def getRuleset() {
        def data = [ruleset: "D&D 5e"]
        render data as JSON
    }

}
