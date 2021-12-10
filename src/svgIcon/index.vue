<template>    
    <svg :class="svgClass" aria-hidden="true">
        <use  :xlink:href="iconName" />
    </svg>
</template>
<script>
import { computed } from '@vue/composition-api'; 
export default {
   name:'svgIcon',
   props:{
     data_iconName:{
          type:String,
          required:true
      },
     className:{
         type:String,
         default:''
      }
   },
   setup ( props ) {
       const svgClass = computed( () =>{
           if(props.className){
               return `svg-icon ${ props.className }`;
           }else{
              return 'svg-icon'
           }
       })
       const iconName = computed( () => `#icon-${props.data_iconName}`)

       return {
           /* computed */
           svgClass, iconName
       }
   },
}
</script>
<style scoped>
  .svg-icon{
     width: 1.5em;
     height: 1.5em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden; 
  }
</style>
