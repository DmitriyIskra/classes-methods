export default class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 20 / 100;
      this.defence += this.defence * 20 / 100;
    } else {
      throw new Error('Пациенту уже ничто не поможет');
    }
  }
}
