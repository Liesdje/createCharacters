package domain

class Ruleset {
    String name
    String description

    static constraints = {
        name blank: false
        description blank: false
    }
}
