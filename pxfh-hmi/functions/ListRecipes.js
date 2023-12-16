// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var pxfh_hmi;
        (function (pxfh_hmi) {
            function ListRecipes(ctx, recipeList, recipeType) {
                if (!recipeList) {
                    // Inform the system that we are done and have a dummy result
                    ctx.success({});
                    return;    // We are running async so the return value is not used
                }
                // Build a flat array out of the recursive object
                var result = {};

                // Checks recursive all properties of the recipe folder and remember recipes
                var iterateRecipes = function (currentPath, recipeFolder) {
                    for (var subPath in recipeFolder) {

                        var currentName = (currentPath ? currentPath + '::' : '') + subPath;
                        var recipeOrRecipeFolder = recipeFolder[subPath];
                        console.log(recipeOrRecipeFolder);

                        if (
                            typeof recipeOrRecipeFolder.recipeTypeName === 'string'
                            && recipeOrRecipeFolder.values !== null
                            && typeof recipeOrRecipeFolder.values === 'object'
                        ) {
                            // Add to array when we have reached an recipe (which has to contain a recipeTypeName and a values object)
                            if(recipeOrRecipeFolder.recipeTypeName === recipeType) {
                                //result.push(currentName);
                                //result.push(recipeOrRecipeFolder);
                                result[currentName] = recipeOrRecipeFolder;
                            }
                            
                        } else {
                            // no recipe found, go deeper
                            iterateRecipes(currentName, recipeOrRecipeFolder);
                        }
                    }
                }
                // Start iteration at the root of the object
                iterateRecipes('', recipeList);
                // Inform the system that we are done and have a result
                ctx.success(result);
                return;    // We are running async so the return value is not used
            }
            pxfh_hmi.ListRecipes = ListRecipes;
        })(pxfh_hmi = Functions.pxfh_hmi || (Functions.pxfh_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ListRecipes', 'TcHmi.Functions.pxfh_hmi', TcHmi.Functions.pxfh_hmi.ListRecipes);
