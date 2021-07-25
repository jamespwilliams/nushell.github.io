(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{713:function(e,a,t){"use strict";t.r(a);var s=t(44),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"math"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#math"}},[e._v("#")]),e._v(" Math")]),e._v(" "),t("p",[e._v("Sometimes, you just need to add a few numbers when you're working on a task.  Nu offers a set of basic math operations that you can use. Math expressions are available wherever you can call a command.")]),e._v(" "),t("h2",{attrs:{id:"add-subtract-multiply-divide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-subtract-multiply-divide"}},[e._v("#")]),e._v(" Add, Subtract, Multiply, Divide")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> 1 + 3\n4\n")])])]),t("p",[e._v("In Nu, you can do the usual add, subtract, multiply and divide with the operators "),t("code",[e._v("+")]),e._v(", "),t("code",[e._v("-")]),e._v(", "),t("code",[e._v("*")]),e._v(", and "),t("code",[e._v("/")]),e._v(" respectively.  Operator precedence is respected, so "),t("code",[e._v("1 + 2 * 3")]),e._v(" will be treated as "),t("code",[e._v("1 + (2 * 3)")]),e._v(".  Which leads us to another concept: parentheses.")]),e._v(" "),t("h2",{attrs:{id:"parentheses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parentheses"}},[e._v("#")]),e._v(" Parentheses")]),e._v(" "),t("p",[e._v("You can use parentheses to group math expression in math mode. This allows you to write "),t("code",[e._v("(1 + 2) * 3")]),e._v(" if you want the addition to have higher precedence.")]),e._v(" "),t("h2",{attrs:{id:"in-and-not-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-and-not-in"}},[e._v("#")]),e._v(" "),t("code",[e._v("in")]),e._v(" and "),t("code",[e._v("not-in")])]),e._v(" "),t("p",[e._v("You can check if a value is in a set of values or not using the "),t("code",[e._v("in")]),e._v(" and "),t("code",[e._v("not-in")]),e._v(" operators.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> 1 in [1 2 3]\ntrue\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> 1 not-in [1 2 3]\nfalse\n")])])]),t("h2",{attrs:{id:"and"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#and"}},[e._v("#")]),e._v(" =~ and !~")]),e._v(" "),t("p",[e._v("You can check to see if a string is inside of another string, or not inside of another string, using "),t("code",[e._v("=~")]),e._v(" and "),t("code",[e._v("!~")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> "foobar" =~ "foo"\ntrue\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> "foobar" !~ "baz"\ntrue\n')])])]),t("h2",{attrs:{id:"comparisons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparisons"}},[e._v("#")]),e._v(" Comparisons")]),e._v(" "),t("p",[e._v("The following comparisons are also available:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("<")]),e._v(" - less than")]),e._v(" "),t("li",[t("code",[e._v("<=")]),e._v(" - less than or equal to")]),e._v(" "),t("li",[t("code",[e._v(">")]),e._v(" - greater than")]),e._v(" "),t("li",[t("code",[e._v(">=")]),e._v(" - greater than or equal to")]),e._v(" "),t("li",[t("code",[e._v("==")]),e._v(" - equal to")]),e._v(" "),t("li",[t("code",[e._v("!=")]),e._v(" - not equal to")])]),e._v(" "),t("h2",{attrs:{id:"compound-operators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compound-operators"}},[e._v("#")]),e._v(" Compound operators")]),e._v(" "),t("p",[e._v("Nushell also supports "),t("code",[e._v("&&")]),e._v(" and "),t("code",[e._v("||")]),e._v(" to join two operations that return boolean values, using 'and' and 'or' respectively.  For example: "),t("code",[e._v('ls | where name in ["one" "two" "three"] && size > 10kb')])]),e._v(" "),t("h2",{attrs:{id:"order-of-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order-of-operations"}},[e._v("#")]),e._v(" Order of operations")]),e._v(" "),t("p",[e._v("Math operations are evaluated in the follow order (from highest precedence to lowest):")]),e._v(" "),t("ul",[t("li",[e._v("Parentheses ("),t("code",[e._v("()")]),e._v(")")]),e._v(" "),t("li",[e._v("Multiply ("),t("code",[e._v("*")]),e._v(") and Divide ("),t("code",[e._v("/")]),e._v(")")]),e._v(" "),t("li",[e._v("Add ("),t("code",[e._v("+")]),e._v(") and Subtract ("),t("code",[e._v("-")]),e._v(")")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> 3 * (1 + 2)\n9\n")])])]),t("h2",{attrs:{id:"short-hand-math-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#short-hand-math-mode"}},[e._v("#")]),e._v(" Short-hand math mode")]),e._v(" "),t("p",[e._v('A variation of math mode that Nushell supports is called "short-hand" math mode. This is because it gives you a way of accessing columns using a simple short-hand.')]),e._v(" "),t("p",[e._v("You may have already used this functionality before. If, for example, we wanted to only see rows from "),t("code",[e._v("ls")]),e._v(" where the entry is at least ten kilobytes, we can write:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> ls | where size > 10kb\n")])])]),t("p",[e._v("The "),t("code",[e._v("where size > 10kb")]),e._v(" is a command with two parts: the command name "),t("code",[e._v("where")]),e._v(" and the short-hand math expression "),t("code",[e._v("size > 10kb")]),e._v(". We say short-hand because "),t("code",[e._v("size")]),e._v(" here is the shortened version of writing "),t("code",[e._v("$it.size")]),e._v(".  If we look at the fully expanded form, we would see:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> ls | where {|$it| $it.size > 10kb }\n")])])]),t("p",[e._v("Rather than having to type all this out every time a command needs to work with column data, we use this short-hand mode to access column data.")]),e._v(" "),t("p",[e._v("For the expansion to work, the column name must appear on the left-hand side of the operation. Above, "),t("code",[e._v("size")]),e._v(" appears on the left-hand side of the comparison, which allows the expression to expand into the full math mode block.")])])}),[],!1,null,null,null);a.default=o.exports}}]);