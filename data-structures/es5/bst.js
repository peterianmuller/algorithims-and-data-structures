var BSTes5 = function (val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

BSTes5.prototype.insert = function (val) {
  if (!this) {
    return "There must be at least one node!";
  } else if (val <= this.val) {
    if (this.left) {
      this.left.insert(val);
    } else {
      this.left = new BSTes5(val);
    }
  } else {
    if (this.right) {
      this.right.insert(val);
    } else {
      this.right = new BSTes5(val);
    }
  }
};
