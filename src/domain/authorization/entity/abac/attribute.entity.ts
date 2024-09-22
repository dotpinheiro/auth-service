

export class AttributeEntity {
  private _name: string;
  private _value: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

}
