/**
* TextOperationTransformtion
*/
export default class TextOperationTransformtion {

    constructor() {
  
    }

    
    retain(position: number) {

      return this;
    }

    insert(str: string) {
      return this;
    }

    delete(position: number) {
      return this;
    }

    apply(str: string) {

    }

    transform() {

    }
}

/**
var operation = new TextOperationTransformtion()
  .retain(3)
  .insert("abc");
operation.apply("d"); // => "abcd"

var operation = new ot.Operation()
  .delete("ab")
  .retain(2);
operation.apply("abcd"); // => "cd"

var transformedPair = ot.Operation.transform(opA, opB);
var opAPrime = transformedPair[0];
var opBPrime = transformedPair[1];
var strABPrime = opAPrime.apply(strB);
var strBAPrime = opBPrime.apply(strA);
*/
