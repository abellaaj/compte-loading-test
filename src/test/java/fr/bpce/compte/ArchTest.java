package fr.bpce.compte;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("fr.bpce.compte");

        noClasses()
            .that()
                .resideInAnyPackage("fr.bpce.compte.service..")
            .or()
                .resideInAnyPackage("fr.bpce.compte.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..fr.bpce.compte.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
