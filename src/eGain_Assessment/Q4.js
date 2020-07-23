/*
Consider a Javascript class B which has two methods m1 and m2. Method m1 calls this.m2(). Another class D extends B. Class D has three methods, m1, m2 and m3. The method D.m3 calls super.m1() and the method D.m1 doesn't call any other method. If we declare let d = new D() and then call d.m3() which version of m2 would end up getting called?
Pick the closest option
D.m2 will get called
B.m2 will get called
Calling super.m1 is not allowed
Neither version of m2 gets called because D.m1 gets called
None of the above
*/
