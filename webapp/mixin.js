// MIXIN will implement the Observer Pattern
export const observerMixin = {
  observers: new Set(),
  addObsever(obs) {
    this.addObsever.add(obs);
  },
  removeObserver(obs) {
    this.observers.delete(obs);
  },
  notify() {
    this.observers.forEach((obs) => obs());
  },
};
observerMixin.addObsever(() => {});
observerMixin.addObsever(() => {});
observerMixin.addObsever(() => {});
observerMixin.notify(() => {});
