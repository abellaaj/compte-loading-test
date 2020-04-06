import { element, by, ElementFinder } from 'protractor';

export class CompteComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-compte div table .btn-danger'));
  title = element.all(by.css('jhi-compte div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class CompteUpdatePage {
  pageTitle = element(by.id('jhi-compte-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  libelleInput = element(by.id('field_libelle'));
  banqueInput = element(by.id('field_banque'));
  dateAddedInput = element(by.id('field_dateAdded'));
  dateModifiedInput = element(by.id('field_dateModified'));
  ibanInput = element(by.id('field_iban'));
  deviseInput = element(by.id('field_devise'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setLibelleInput(libelle: string): Promise<void> {
    await this.libelleInput.sendKeys(libelle);
  }

  async getLibelleInput(): Promise<string> {
    return await this.libelleInput.getAttribute('value');
  }

  async setBanqueInput(banque: string): Promise<void> {
    await this.banqueInput.sendKeys(banque);
  }

  async getBanqueInput(): Promise<string> {
    return await this.banqueInput.getAttribute('value');
  }

  async setDateAddedInput(dateAdded: string): Promise<void> {
    await this.dateAddedInput.sendKeys(dateAdded);
  }

  async getDateAddedInput(): Promise<string> {
    return await this.dateAddedInput.getAttribute('value');
  }

  async setDateModifiedInput(dateModified: string): Promise<void> {
    await this.dateModifiedInput.sendKeys(dateModified);
  }

  async getDateModifiedInput(): Promise<string> {
    return await this.dateModifiedInput.getAttribute('value');
  }

  async setIbanInput(iban: string): Promise<void> {
    await this.ibanInput.sendKeys(iban);
  }

  async getIbanInput(): Promise<string> {
    return await this.ibanInput.getAttribute('value');
  }

  async setDeviseInput(devise: string): Promise<void> {
    await this.deviseInput.sendKeys(devise);
  }

  async getDeviseInput(): Promise<string> {
    return await this.deviseInput.getAttribute('value');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class CompteDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-compte-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-compte'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
