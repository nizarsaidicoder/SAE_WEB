<template>
  <div class="code-container">
    <highlightjs
      language="csharp"
      :code="csharpCode"
      class="code" />
  </div>
</template>

<script>
  import "highlight.js/lib/common";
  import hljsVuePlugin from "@highlightjs/vue-plugin";

  export default {
    components: {
      highlightjs: hljsVuePlugin.component,
    },
    data() {
      return {
        csharpCode: `
 public static int[,] ImageToInt(Bitmap Ximg)
 {
     int largeur = Ximg.Width;
     int hauteur = Ximg.Height;
     int[,] tab = new int[hauteur, largeur];
     for (int lig = 0; lig < hauteur; lig++)
     {
         for (int col = 0; col < largeur; col++)
         {
             Color c = Ximg.GetPixel(col, lig);

             tab[lig, col] = (int)c.R;
         }
     }
     return tab;
 }`,
      };
    },
  };
</script>
<style lang="scss">
  .code {
    max-width: fit-content;
    // margin: 8rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  code {
    border-radius: 1rem;
    font-weight: bold;
  }
  .code-container {
    background-color: red;
    max-width: fit-content;
    // padding: 2rem;
  }
</style>
