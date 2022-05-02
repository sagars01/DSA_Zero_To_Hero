const CQ = require('../../src/Stacks_Queues/CircularQueue');

describe('Stacks and Queues: Circular Queue Suite', () => {
  test('should return a valid queue of SIZE 4', () => {
    const q = new CQ(4);

    expect(q.size).toBe(4);
  });

  test('should return the HEAD of queue to be 1', () => {
    const q = new CQ(4);
    q.enQueue(1);
    q.enQueue(2);
    q.deQueue();
    expect(q.head).toBe(1);
  });

  test('should contain the value 1 in Queue after ENQUEUE', () => {
    const q = new CQ(1);
    q.enQueue(1);
    expect(q.queue).toEqual([1]);
  });

  test('should have the tail and head equal after DEQUEUE', () => {
    const q = new CQ(1);
    q.enQueue(1);
    q.deQueue();
    expect(q.tail).toEqual(q.head);
  });
});
