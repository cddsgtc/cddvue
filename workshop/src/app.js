/**
 * Created by Administrator on 2016/9/29.
 */
import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
import 'style!raw!./cdd.css';
import text from 'raw!../cdd.txt';

$('#wrapper').text(text);
$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats){
    $('<li></li>').text(cat).appendTo(ul);
}