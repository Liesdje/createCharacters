package domain

class CharacterSheet {
    String name
    String race
    String classType
    String alignment
    Integer level
    Integer experience
    Integer strength
    Integer dexterity
    Integer constitution
    Integer intelligence
    Integer wisdom
    Integer charisma

    //TODO false to all for the moment
    static constraints = {
        name blank: false
        race blank: false
        classType blank: false
        alignment blank: false
        level blank: false
        experience blank: false
        strength blank: false
        dexterity blank: false
        constitution blank: false
        intelligence blank: false
        wisdom blank: false
        charisma blank: false
    }
}
