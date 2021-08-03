import { alignmentProperties, colorProperties, sizeProperties } from "../constants/classPropertiesConstants.js";

// Function to add a certain class to the classes object
const addClassToClassesObject = (initialObject, propertyClass) => {
  Object.defineProperty(initialObject,  propertyClass, {
    value: true,
  })
}; 

const getComputedClassName = (originPropertiesObj, propertyName) => {
  // We'll receive an originPropertiesObject, which, in our case, would be
  // either the alignmentProperties or the colorProperties
  // As well as a property like: 'center'

  /* // We'll check whether or not the property has the name of any of the constants in this step // */ 

  // Our property name will now become something like: "CENTER"
  const capitalizedPropertyName = propertyName.toUpperCase(); // => "CENTER" for our documented example

  // We'll go over all of the orignPropertiesObj keys to check if 
  // capitalizedPropertyName + '_' + originPropertiesObj substring before 'Properties' is an actual
  // constant name from the classPropertiesConstants  

  // This will contain all constants keys in object
  const propertiesKeys = Object.keys(originPropertiesObj);

  // => this should be "CENTER_ALIGNMENT" in our case
  const sampleTemplateKey = propertiesKeys[0];

  const propertyType = sampleTemplateKey.split('_')[1];

  // This should be "CENTER_ALIGNMENT" in our documented case
  const mergedComputedConstant = capitalizedPropertyName + "_" + propertyType;

  // This means our constant actually exists in the originPropertiesObj
  if (propertiesKeys.includes(mergedComputedConstant))
    return originPropertiesObj[mergedComputedConstant];

  return new Error("Property doesn't exist");

}

export const getPositionHelper = (position, color, size) => {
  // An object with the following structure:
  // {
  //    specific_color_class: true,
  //    specific_position_class: true,
  // }

  var classes = {};
  const positionClass = getComputedClassName(alignmentProperties, position);
  const colorClass = getComputedClassName(colorProperties, color);
  const sizeClass = getComputedClassName(sizeProperties, size);

  if (positionClass)
    addClassToClassesObject(classes, positionClass);

  if (colorClass)
    addClassToClassesObject(classes, colorClass);

  if (sizeClass)
    addClassToClassesObject(classes, sizeClass);

  return classes;
} 

