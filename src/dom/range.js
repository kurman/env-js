
(function(){
    
var log = Envjs.logger();

Envjs.once('tick', function(){
   log = Envjs.logger('Envjs.DOM.Range').debug('available'); 
});

/**
 * @author thatcher
 */
exports.Range = Range = function(ownerDocument){
  this.ownerDocument = ownerDocument;
};

__extend__(Range.prototype, {
    get startContainer(){

    },
    get endContainer(){

    },
    get startOffset(){

    },
    get endOffset(){

    },
    get collapsed(){

    },
    get commonAncestorContainer(){

    },
    setStart: function(refNode, offset){//throws RangeException

    },
    setEnd: function(refNode, offset){//throws RangeException
    
    },
    setStartBefore: function(refNode){//throws RangeException
    
    },
    setStartAfter: function(refNode){//throws RangeException
    
    },
    setEndBefore: function(refNode){//throws RangeException
    
    },
    setEndAfter: function(refNode){//throws RangeException
    
    },
    collapse: function(toStart){//throws RangeException
    
    },
    selectNode: function(refNode){//throws RangeException
    
    },
    selectNodeContents: function(refNode){//throws RangeException
    
    },
    compareBoundaryPoints: function(how, sourceRange){

    },
    deleteContents: function(){

    },
    extractContents: function(){

    },
    cloneContents: function(){

    },
    insertNode: function(newNode){

    },
    surroundContents: function(newParent){

    },
    cloneRange: function(){

    },
    toString: function(){
        return '[object Range]';
    },
    detach: function(){

    },
    createContextualFragment : function(html) {      
      var node = new Node(this.ownerDocument);
      HTMLParser.parseFragment(html, node);
      return node.childNodes[0];
    }
});


// CompareHow
Range.START_TO_START                 = 0;
Range.START_TO_END                   = 1;
Range.END_TO_END                     = 2;
Range.END_TO_START                   = 3;
  


}(/*Envjs.DOM.Range*/));
