const {test, expect} = require('@playwright/127.0.0.1:3002') ;

test.beforeEach(async () => {
  await page.goto('http://127.0.0.1:3002/index.html');
});

test.decribe('Testing Form', () => {

  test('deberia mostrar mensaje correcto', async ({ page }) => {
    await page.getByLabel('nombre'),{ exact: true} .fill('#nombre', 'Min');
    await page.getByLabel('apellido'),{ exact: true}.fill('#apellidos', 'Leo');
    await page.getByLabel('estadoCivil').fill('#estadoCivil', { label: 'Soltero' });
    await page.getByLabel('idioma').selectOption('#idioma1');
    await page.getByLabel('profesion') .check('#profesion1');
    await page.getByLabel('comentarios').fill('#comentarios', 'Este es un comentario de prueba.');

    await page.getByLabel('button').click();

    const p = await page.getByTestId('success-message');

    await expect(p).toBeVisible();

  })
  });

  test('deberian borrarse los campos de texto', async ({ page }) => { 
    const inputNombre = await page.getByLabel('nombre', { exact: true})
    const inputApelliodo  = await page.getByLabel('apellido', { exact: true})
    const inputEstadoCivil = await page.getByLabel('estadoCivil')
    const inputIdioma =  await page.getByLabel('idioma')
    const inputProfesion =  await page.getByLabel('profesion') 
    const inputComentarios = await page.getByLabel('comentarios')

    await inputNombre.fill('#nombre', 'Min');
    await inputApelliodo.fill('#apellidos', 'Leo');
    await inputEstadoCivil.fill('#estadoCivil', { label: 'Soltero' });
    await inputIdioma.selectOption('#idioma1');
    await inputProfesion.check('#profesion1');
    await inputComentarios.fill('#comentarios', 'Este es un comentario de prueba.');

    await page.getByLabel('button').click();
 
    await expect(inputNombre).toBeEmpty();
    await expect(inputApelliodo).toBeEmpty();
    await expect(inputEstadoCivil).toBeEmpty();
    await expect(inputIdioma).toBeEmpty();
    await expect(inputProfesion).toBeEmpty();
    await expect(inputComentarios).toBeEmpty();

    const interval = 60 * 1000; 
  setInterval(fillForm, interval);
  });
  
//   const page = await browser.newPage();

//   const fileUrl = 'http://127.0.0.1:3002/index.html';
  

  
//   async function fillForm() {
//     await page.fill('#nombre', 'Min');
//     await page.fill('#apellidos', 'Leo');
//     await page.selectOption('#estadoCivil', { label: 'Soltero' });
//     await page.check('#idioma1');
//     await page.check('#idioma2');
//     await page.fill('#comentarios', 'Este es un comentario de prueba.');

    
//     await page.click('#mostrar_datos');
    
    
//     const alert = await page.waitForEvent('dialog');
//     const message = alert.message();
//     console.log('Mensaje de la alerta:');
//     console.log(message);
//   }

 
//   const interval = 60 * 1000; 
//   setInterval(fillForm, interval);

  
// })();