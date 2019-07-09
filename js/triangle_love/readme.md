三角恋 
一定有三者 构造函数 Constructor
prototype 原型 
实例 instance

JS没有类，只有对象，都是通过原型来拿到的

通过构造函数Person 生成了person的实例，同时在Person的原型 Person.prototype 对象上 定义了getName 方法

构造函数 运行的，newPerson（）  this-> 新的实例， 空对象Person{}.name
实力怎么拿到原型对象的方法或属性？
1. 任何对象都有__proto__私有属性，这个对象的出处是哪？ 实例和类之间没有血缘关系，__proto__
2. 构造函数有prototype属性
3. 原型对象上有Constructor属性指向构造函数

js 面向对象是基于原型的

链（原型链）