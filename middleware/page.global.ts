export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = path => path.split('/').filter(Boolean).length;
  const depth = getDepth(to.path) - getDepth(from.path);
  to.meta.layoutTransition = from.meta.layoutTransition = { name: `layout-${depth > 0 ? 'left' : 'right'}` };
})
