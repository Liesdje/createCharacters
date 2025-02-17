package service

import domain.CharacterSheet
import domain.Ruleset
import org.hibernate.sql.Insert
import org.kie.api.KieServices
import org.kie.api.runtime.KieContainer
import org.kie.api.runtime.StatelessKieSession

class CharacterSheetGeneratorService {

    def generateCharacterSheet(Ruleset ruleset, CharacterSheet characterSheet) {
        KieServices kieServices = KieServices.Factory.get()
        KieContainer kieContainer = kieServices.getKieClasspathContainer()
        StatelessKieSession kieSession = kieContainer.newStatelessKieSession()

        kieSession.execute([
                new Insert(ruleset),
                new Insert(characterSheet)
        ])

        return characterSheet
    }
}
