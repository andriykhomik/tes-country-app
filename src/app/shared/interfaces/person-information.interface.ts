import { PersonContacts } from '@shared/interfaces/person-contacts.interface';
import { PersonLanguage } from '@shared/interfaces/person-language.interface';

export interface PersonInformation {
  name: string;
  surname: string;
  country: string;
  nationality: string;
  locationCountry: string;
  position: string;
  contacts: PersonContacts;
  hardSkills: string[];
  softSkills: string[];
  languages: PersonLanguage[];
  interests: string[];
}
