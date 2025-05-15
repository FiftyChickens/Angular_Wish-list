export class WishItem {
  id: string;
  constructor(public wishText: string, public isComplete: boolean = false) {
    this.id = crypto.randomUUID();
  }
}
