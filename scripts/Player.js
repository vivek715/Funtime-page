class Player {
  constructor(username, weapons) {
    this.username = username;
    this.health = 100;
    this.weapons = weapons;
  }
  
  // get the user's weapons
  getWeapons() {
    return this.weapons;
  }
  
  // get the user's weapons
  setWeapons(weapons) {
    this.weapons = weapons;
  }
  
  // get the user's username
  getUsername() {
    return this.username;
  }
  
  // get the user's username
  setUsername(username) {
    this.username = username;
  }
  
  // get the user's health
  getHealth() {
    return this.health;
  }
  
  // get the user's weapons
  setHealth(health) {
    this.health = health;
  }
  
  attack(points) {
    this.health = this.health - points;
  }
  
  isDead() {
    if (this.health <= 0) {
      return true;
    }
    
    return false; 
  }
  
}