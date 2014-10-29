  //Purpose:		Survey Engine Design
  //Author:		Nergui Badarch
  //Date:		06/21/2014

  
function Question(question) {

  this.question = question;
}

Question.prototype.putQuestion = function(counter){
  return "<span name='ans"+counter+"' id='ans"+counter+"'>"+this.question+"</span>";
};

Question.prototype.generate = function(counter){
    return "<input type='text' name='ans"+counter+"' id='ans"+counter+"'>";
    
  //alert("blank");
};


function QuestionRadioButton(question,value) {
 
  Question.call(this, question);

  this.value = value;
};


QuestionRadioButton.prototype = Object.create(Question.prototype); 

QuestionRadioButton.prototype.constructor = QuestionRadioButton;

QuestionRadioButton.prototype.generate = function(counter){
 // alert(this.value+"Radio");
        
        var sb = new StringBuilder();
      
       var valueArray=splitByComma(this.value);
       for(var i = 0; i < valueArray.length; i++)
       { 
       sb.append("<input type='radio' name='ans"+counter+"' id='ans"+counter+"' value='"+valueArray[i]+"'>"+valueArray[i]);
       }
   return sb.toString();
};
function QuestionCheckboxButton(question,value) {

  Question.call(this, question);

 
  this.value = value;
  
};


QuestionCheckboxButton.prototype = Object.create(Question.prototype); 


QuestionCheckboxButton.prototype.constructor = QuestionCheckboxButton;

QuestionCheckboxButton.prototype.generate = function(counter){
   var sb = new StringBuilder();
    var valueArray=splitByComma(this.value);
   for(var i = 0; i < valueArray.length; i++)
   {

    sb.append("<input type='checkbox' name='ans"+counter+"' id='ans"+counter+"' value='"+valueArray[i]+"'>"+valueArray[i]);
   }
   return sb.toString();
};

function QuestionDropdown(question,value) {
  
  Question.call(this,question);

  this.value = value;
};


QuestionDropdown.prototype = Object.create(Question.prototype); 


QuestionDropdown.prototype.constructor = QuestionDropdown;

QuestionDropdown.prototype.generate = function(counter){
         var valueArray=splitByComma(this.value);
         var sb = new StringBuilder();
    sb.append("<select name='ans"+counter+"' id='ans"+counter+"' >");
                
                    for(var i = 0; i < valueArray.length; i++)
                    {
                        
                      sb.append("<option value='"+valueArray[i]+"'>"+valueArray[i]+"</option>");
                      
                    }
   return sb.toString();
};


    function splitByComma(str) {
     var values = str.split(',');
     for(var i = values.length; i--;) {
          if(values[i] == "") {
              values.splice(i, 1);
          }
      }
        return values;
    };
    function StringBuilder()
    {
            var strings = [];

            this.append = function (string)
            {
                    string = verify(string);
                    if (string.length > 0) strings[strings.length] = string;
            };
            this.appendLine = function (string)
            {
                    string = verify(string);
                    if (this.isEmpty())
                    {
                            if (string.length > 0) strings[strings.length] = string;
                            else return;
                    }
                    else strings[strings.length] = string.length > 0 ? "\r\n" + string : "\r\n";
            };
            this.clear = function () { strings = []; };
            this.isEmpty = function () { return strings.length == 0; };
            this.toString = function () { return strings.join(""); };

            var verify = function (string)
            {
                    if (!defined(string)) return "";
                    if (getType(string) != getType(new String())) return String(string);
                    return string;
            };
            var defined = function (el)
            {
                    return el != null && typeof(el) != "undefined" && String(el) != "NaN";
            };
            var getType = function (instance)
            {
                    if (!defined(instance.constructor)) throw Error("Unexpected object type");
                    var type = String(instance.constructor).match(/function\s+(\w+)/);
                    return defined(type) ? type[1] : "undefined";
            };
    };

