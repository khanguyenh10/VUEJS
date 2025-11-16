<script setup>
const msg = 'Hello World!';
const rawHtml = '<span style="color: red">This is red text.</span>';
const buttonId = 'btn-id';
const className = 'btn btn-primary';
const isDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'border: 1px solid #000; padding: 10px;'
//   disabled: true
}
const number = 4;
const convertToId = (str) => str.split(' ').join('-');
const attributeName = 'href';
const url = 'https://vuejs.org/';
const listString = 'a b c d e';

</script>
<template>
  <h1>Syntax</h1>
  <!--
    Nội suy văn bản : {{ msg }}
    HTML thô: v-html="rawHtml
    Ràng buộc thuộc tính:
      - v-bind:id="dynamicId"
      - :id="dynamicId"
    Disabled nút:
      - true : khi có giá trị true, "", 1, ...
      - false : khi có giá trị false, null, undefined, 0, ...
    Ràng buộc nhiều thuộc tính: v-bind="objectOfAttrs"
    Đối số động: :[attributeName]="url"
    Directive là thuộc tính chỉ thị có tiền tố "v-html", "v-bind" , "v-if", "v-for"...
  -->
  <p>Message: {{ msg }}</p>
  <p v-html="rawHtml"></p>
  <button :id="buttonId" :class="className" :disabled="isDisabled"> {{isDisabled ? 'Disabled' : 'Click here'}}</button> <br/><br/>
  <!-- Ràng buộc nhiều thuộc tính -->
  <button v-bind="objectOfAttrs">Click here</button><br/><br/>
  <!-- Biểu thức trong nội suy -->
  <!-- <button :id="listString.split(' ').join('-')"> Number: {{ number * 2}} </button>  -->
  <button :id="convertToId(listString)"> Number: {{ number * 2}} </button> 
  <!-- Đối số động -->
  <a :[attributeName]="url" target="_blank">Click</a>
</template>
