using { virtualProperties as vp } from '../db/schema';


service Demo {
@odata.draft.enabled 
  entity SomeEntities as projection on vp.SomeEntity;
}