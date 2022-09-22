import path from 'path';

//testing
describe('Testing', () => {
  it('read folder', async () => {
    const folderPath = await cy.task('projectRootFolder', { timeout: 30000 });

    const blogFolderPath = `${folderPath}\\blog`;
    console.log(blogFolderPath);

    cy.task('readdirSync', blogFolderPath).then((fileObjs) => {
      console.log(fileObjs);

      fileObjs.forEach((file) => {
        console.log(file);
      });
    });
  });
});
