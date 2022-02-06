
class ContentList {
  static contentCount = 0,
  private _type: Content[];

  constructor(type: Content) {
    this._type = []; // initialize array
  }

  get items(): Content[] {
    return this._type;
  }

  increaseCount() {
    return ++ContentList.contentCount;
  }
}
jk