<template>
  <div>
    <base-docs-title
      :title="`Organize and submit a new SPARC dataset with SODA`"
    >
    </base-docs-title>

    <div class="flex flex-col">
      <base-docs-subtitle> Background </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          This is the suggested workflow for preparing and submitting your SPARC
          datasets with SODA using the Free Form Mode features (accessible from
          the sidebar). All these steps are mandatory (unless marked otherwise)
          if you wish to satisfy the SPARC requirements. Once you complete these
          steps, your datasets will be curated according to the SPARC guidelines
          and summited to the SPARC Curation Team for review.
        </p>
      </div>

      <base-docs-subtitle>
        Prepare Dataset on Pennsieve (under the Manage Datasets tab of the Free
        Form Mode)
      </base-docs-subtitle>

      <base-docs-heading>
        A1. Connect your Pennsieve account with SODA
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          This is only required the first time you use SODA. This step will be
          automatically requested from you when you start SODA if you haven't
          connected to Pennsieve. You can also trigger this step manually by
          clicking the edit (pencil icon image) button at any of the
          <span class="highlight-text"> Current account</span> fields in SODA.
          We would suggest using the one found under the
          <span class="highlight-text"> Create a new dataset</span> option at
          <span class="highlight-text">
            Free Form Mode > Manage Datasets.
          </span>
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/388cfd3023fb89515049abb608a8f70ff21208c0d8d402aafbc8ab9d98c8ec7f/68747470733a2f2f692e6962622e636f2f4e43485074347a2f696d6167652e706e67"
        />
      </div>

      <base-docs-heading> A2. Create a new dataset </base-docs-heading>

      <div class="p-parent-div">
        <p>
          To create a new dataset on Pennsieve, use the
          <span class="highlight-text"> Create a new dataset</span> option under
          <span class="highlight-text">
            Free Form Mode > Manage Datasets.
          </span>
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/a92ee77f878c7668dd59628100ebdb12fbe4d3aba92479b720d121ce756438dc/68747470733a2f2f692e6962622e636f2f426756384c76762f696d6167652e706e67"
        />
      </div>

      <div class="p-parent-div">
        <p>
          You can then confirm your details in the account step. Type out the
          name of the dataset you want to create on Pennsieve and click on
          <span class="highlight-text"> Create dataset. </span>
        </p>
      </div>

      <div class="p-parent-div">
        <p>
          Note: You can use the navigation buttons in the bottom right corner of
          the app to go through all the mandatory steps needed to curate a
          dataset. These buttons will follow the same steps as detailed in this
          guide.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/b95119c2a2f81cc5831dd78d52527e3bbc5ebcd19ea0ce05ff62deccee0b3890/68747470733a2f2f692e6962622e636f2f544c4e425064702f696d6167652e706e67"
        />
      </div>

      <base-docs-heading>
        A3. Make PI of the SPARC award the owner of the dataset
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          By default, the creator of the dataset (you) is the owner. As per
          SPARC guidelines, the PI of your award needs to be the owner of the
          dataset. You can use the feature
          <span class="highlight-text"> Make PI owner of dataset</span> under
          the <span class="highlight-text"> Manage Datasets</span> tab to
          accomplish this task. The dataset you created during step A2 should be
          automatically selected (you can select another one by clicking on the
          pencil symbol next to
          <span class="highlight-text"> Current dataset</span>). Simply select
          your dataset PI from the dropdown list and click on
          <span class="highlight-text"> Make PI owner</span> (read and click
          <span class="highlight-text"> Yes</span> in the warning prompt) to
          make them the owner.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/0eacfb7a1a28854bdb789485b2afa7778d70c0858b146044073683e0bd2d9cfe/68747470733a2f2f692e6962622e636f2f744347726a56472f696d6167652e706e67"
        />
      </div>

      <base-docs-heading>
        A4. Give access to other members/teams who may need to contribute to the
        dataset
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Your dataset may require additional people or teams to be given
          permission to access the dataset. You can use the feature
          <span class="highlight-text"> Add/edit permissions</span> under the
          <span class="highlight-text"> Manage Datasets</span> tab to accomplish
          this task. Currently given permissions will be visible under
          <span class="highlight-text"> Current permissions</span>. To add
          additional permissions for teammates, click on
          <span class="highlight-text"> Add/edit user permissions</span>, select
          your teammate's name from the first dropdown list, select their
          desired permission/role from the second dropdown list, and click on
          <span class="highlight-text"> Add permissions for user</span>. Repeat
          to add more teammates.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/0eacfb7a1a28854bdb789485b2afa7778d70c0858b146044073683e0bd2d9cfe/68747470733a2f2f692e6962622e636f2f744347726a56472f696d6167652e706e67"
        />
      </div>

      <div class="p-parent-div">
        <p>
          If you need to learn more about the types of permissions and their
          restrictions, click
          <NuxtLink
            to="/sodaforsparc/docs/manage-dataset/Add-edit-permissions"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            here</NuxtLink
          >.
        </p>
      </div>

      <base-docs-heading> A5. Add a subtitle </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Add/edit subtitle</span> under the
          <span class="highlight-text"> Manage Datasets</span> tab to add a
          subtitle to your dataset. The dataset you created during step A2
          should be automatically selected (you can select another one by
          clicking on the pencil symbol next to
          <span class="highlight-text"> Current dataset</span>). In the textbox,
          add two or three sentences (limit of 256 characters) that describe the
          content of your dataset and click on
          <span class="highlight-text"> Add subtitle</span>.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/5ae2f88375f706312d1a9c73823293d7a058a2f9da99550b84de04a07b9bf88e/68747470733a2f2f692e6962622e636f2f4a4674565444502f696d6167652e706e67"
        />
      </div>

      <base-docs-heading> A6. Add a description </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Add/edit description</span> under the
          <span class="highlight-text"> Manage Datasets</span> The dataset you
          created during step A2 should be automatically selected (you can
          select another one by clicking on the pencil symbol next to
          <span class="highlight-text"> Current dataset</span>). In the textbox,
          provide a detailed description of your dataset and click on
          <span class="highlight-text"> Add description</span>. It is typically
          recommended to include three sections: Study Purpose, Data Collected,
          and Primary Conclusion. You can see published datasets on
          <a
            href="https://sparc.science/"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            sparc.science
          </a>
          for inspiration.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/43fb106689ac3a41eaf3d3a0faf0adcaccf31623b8d1b32c72455bcac1f14169/68747470733a2f2f692e6962622e636f2f3353597351634b2f696d6167652e706e67"
        />
      </div>

      <base-docs-heading> A7. Upload a banner image </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Upload a banner image</span> under the
          <span class="highlight-text"> Manage Datasets</span> tab to add a
          banner image to your dataset. The dataset you created during step A2
          should be automatically selected (you can select another one by
          clicking on the pencil symbol next to
          <span class="highlight-text"> Current dataset</span>).
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>Click on "Edit banner image"</li>
        <li>Click on "Import image" in the new pop-up window.</li>
        <li>Select the image file you want to use as a banner image.</li>
        <li>
          Crop the file as desired. Note that all banner images must be square,
          have a minimum display size of 512x512 px (1024x1024 px preferred),
          and have a maximum file size of 5 MB.
        </li>
        <li>Click on "Save changes".</li>
      </ul>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Manage-datasets/Add-metadata/banner-image.gif?raw=true"
        />
      </div>

      <base-docs-heading> A8. Assign a license </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Assign a license</span> under
          <span class="highlight-text"> Manage Datasets</span> to assign the
          SPARC mandated Creative Commons Attribution (CC-BY) license to your
          dataset. The dataset you created during step A2 should be
          automatically selected (you can select another one by clicking on the
          pencil symbol next to
          <span class="highlight-text"> Current dataset</span>). Simply click on
          <span class="highlight-text">
            Assign Creative Commons Attribution (CC-BY) license</span
          >
          to assign the license.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/4da3223b2eadcef9aecf5c545821c0f2c6f05195b8b054ea135f0e8a1ce81f8a/68747470733a2f2f692e6962622e636f2f59303170596d702f696d6167652e706e67"
        />
      </div>

      <base-docs-subtitle>
        Prepare SPARC Metadata Files (under the Prepare Metadata tab of the Free
        Form Mode)
      </base-docs-subtitle>

      <base-docs-heading> B1. Prepare submission file </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Create submission.xlsx </span> under the
          <span class="highlight-text"> Prepare Metadata</span>
          tab to accomplish this task. Select
          <span class="highlight-text">
            I want to prepare a new submission.xlsx file</span
          >, then fill out the three required fields for this metadata file.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Enter your award number. We recommend connecting your Airtable account
          with SODA so you can import your award number automatically and
          without error from the SPARC Airtable sheet (this will also come in
          handy later on when adding contributors to the dataset_description
          metadata file). To do that:

          <ul class="docs-ul list-outside list-disc">
            <li>
              Click on
              <span class="highlight-text">
                Click here to import my SPARC award from Airtable
              </span>

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/bfcf10546da716ccabee27be5974a562bbfc6f3d4e26b5d5558fcc3076e54573/68747470733a2f2f692e6962622e636f2f44396658344e732f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              Click
              <span class="highlight-text">Yes</span> on the pop-up for adding
              an Airtable account connection. You need to enter your Airtable
              API key in SODA to connect your account. To find your Airtable
              key, please visit
              <a
                href="https://airtable.com/account"
                target="_blank"
                rel="nofollow"
                class="
                  hover:underline
                  text-blue-600
                  font-asap
                  dark:text-blue-400
                "
              >
                your account</a
              >
              (login if necessary) and click the
              <span class="highlight-text">Generate API Key button</span>. If
              you see a
              <span class="highlight-text">Regenerate API key option</span>
              you may click on the box with the dots to reveal your API key.
              Copy it and paste it in the dedicated field in the SODA pop-up box
              (click <span class="highlight-text"> Yes </span> if a warning
              prompt shows up).

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/7422484284e52c387a1d0103bc28b2db24e85a9b6b3e3e136b76a1ad8238a265/68747470733a2f2f692e6962622e636f2f6e6673514d46762f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              Select your SPARC award from the dropdown and click the 'Confirm'
              button.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/e6c98181aa267701b1be038abe77c0ab66a318b7362939504c2a1bdc18bc595c/68747470733a2f2f692e6962622e636f2f795051584d33462f696d6167652e706e67"
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          Enter the milestone associated with your dataset and the corresponding
          completion date. The milestone and date should be exactly as reported
          in the Data Deliverables document associated with your award (see here
          to find out more). We recommend that you import your Data Deliverables
          document in SODA to automatically extract milestone information. To do
          so:
          <ul class="docs-ul list-outside list-disc">
            <li>
              Click on
              <span class="highlight-text">
                Import milestones from my Data Deliverables Document
              </span>

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/d9de8d44d6285b61fca338d7955657f067f94985730a3da26d6c8198ced1be8c/68747470733a2f2f692e6962622e636f2f46627a465053712f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              You can now click on the
              <span class="highlight-text">Yes, let's import it</span> button in
              the first pop-up. In the second pop-up, click on the
              <span class="highlight-text">Browse here</span> field to select
              the path of your Data Deliverable document. This will import all
              the relevant milestones and submission dates associated with that
              milestone.
            </li>
            <li>
              You can then select the
              <span class="highlight-text">milestone(s)</span> and
              <span class="highlight-text">completion date</span> associated
              with your dataset.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/e6c98181aa267701b1be038abe77c0ab66a318b7362939504c2a1bdc18bc595c/68747470733a2f2f692e6962622e636f2f795051584d33462f696d6167652e706e67"
                />
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <div class="p-parent-div">
        <p>
          Click on the
          <span class="highlight-text"> Generate</span> button and select where
          you want to store the submission.xlsx file on your computer. You will
          be asked to include this file when organizing your dataset in the
          later steps.
          <br />
          The expected structure of this file, generated automatically by SODA,
          is explained in our corresponding
          <NuxtLink
            to="/sodaforsparc/docs/how-to/How-to-structure-the-submission-metadata-file"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            How to</NuxtLink
          >
          page if you would like to learn about it.
        </p>
      </div>

      <base-docs-heading>
        B2. Prepare dataset description file
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can find this feature under
          <span class="highlight-text"> Create dataset_description.xlsx</span>
          under the <span class="highlight-text"> Prepare Metadata</span> tab.
          Select
          <span class="highlight-text">
            I want to prepare a new dataset_description.xlsx file</span
          >. The subsequent interface divides the dataset description file into
          six convenient sections to facilitate your task. Go through them
          successively and populate the various fields as indicated (Mandatory
          fields are indicated):
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Dataset information

          <ul class="docs-ul list-outside list-disc">
            <li>
              Dataset name: The name of the dataset you created during step A2
              should be automatically listed. If not, click on the
              <span class="highlight-text">
                Click here to select my dataset from Pennsieve
              </span>
              option and select your dataset.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/6784c70a94fab65a56c69433be8357c4291d8394a036713495728a3a275a4528/68747470733a2f2f692e6962622e636f2f424c63444c716e2f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              Brief description/subtitle of your dataset: This field should be
              populated automatically with the subtitle of your dataset. It is
              not required to change it.
            </li>
          </ul>
        </li>
        <li>
          Study information
          <ul class="docs-ul list-outside list-disc">
            <li>
              Keywords: Provide at least three keywords (press
              <span class="highlight-text"> Enter</span> on your keyboard after
              each).
            </li>
            <li>
              Provide the number of subjects and samples in your dataset
              (numerical value).
            </li>
          </ul>
        </li>
        <li>
          Award and contributor information
          <ul class="docs-ul list-outside list-disc">
            <li>
              Award number: Click on the
              <span class="highlight-text">
                Click here to select my award number and import contributor
                info</span
              >
              and select your award.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/53da9515f2d57a695b63615acd51eebb61911cb2fca153de9a0ddc054d8a5db5/68747470733a2f2f692e6962622e636f2f704c3770724c732f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              Contributor Information: Click on Add contributor. In the new
              pop-up box, select the contributor from the list automatically
              pulled from the SPARC Airtable sheet. All the information should
              be automatically populated if it is available in the Airtable
              sheet. You only need to specify if the contributor is the contact
              person. Click on
              <span class="highlight-text"> Add contributor</span>. Repeat to
              add more contributors. In the contributors' table, you can drag
              and drop rows to organize contributors in the order that they
              should appear in the dataset_description file. You can also
              remove/edit one with the respective delete/edit buttons.
            </li>
          </ul>
        </li>
        <li>
          Protocol Information
          <ul class="docs-ul list-outside list-disc">
            <li>
              Click on
              <span class="highlight-text"> Add a protocol</span> and enter the
              URL to your protocol on protocols.io.
            </li>
          </ul>
        </li>
      </ul>

      <div class="p-parent-div">
        <p>
          All other information is optional.
          <br />
          When done, click on the
          <span class="highlight-text"> Generate </span> bbutton to create the
          dataset_description.xlsx file on your computer. You will be asked to
          include this file when organizing your dataset in the later steps.
          <br />
          The expected structure of this file, generated automatically by SODA,
          is explained in our corresponding
          <NuxtLink
            to="/sodaforsparc/docs/how-to/How-to-structure-the-dataset-description-metadata-file"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            How to</NuxtLink
          >
          page if you would like to learn about it.
        </p>
      </div>

      <base-docs-heading> B3. Prepare subjects file </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can find this feature under
          <span class="highlight-text"> Create subjects.xlsx</span>
          under the <span class="highlight-text"> Prepare Metadata</span> tab.
          Click on
          <span class="highlight-text">
            I want to start a new subjects file</span
          >, then click on <span class="highlight-text"> Add a subject</span>.
          In the new interface, enter first the unique subject ID for this
          subject.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>
          Experimental setup: Add the pool_id and experimental_group if
          applicable/available.
        </li>
        <li>
          Species information

          <ul class="docs-ul list-outside list-disc">
            <li>Sex: Select one</li>
            <li>
              Species: Type and select the applicable option from the
              suggestions in the dropdown list. SODA will automatically fill
              with the correct scientific name defined by NCBI Taxonomy as per
              the SPARC requirements. If not pre-registered in SODA, click on
              the
              <span class="highlight-text">
                Find the scientific name for xxx</span
              >
              dropdown option to look for the standard terminology of your
              species from the NCBI Taxonomy.
              <br />
              You may just type the name of the animal and click on the dropdown
              option to get the correct species terminology.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/8ffce22d67e90fe62f0712bb232019a9cc97c15a0e03f746ef0fbbb6694d3b45/68747470733a2f2f692e6962622e636f2f507247664774562f696d6167652e706e67"
                />
              </div>
            </li>
            <li>
              Strain: Similarly to the species, type and select the applicable
              options from the suggestions in the dropdown list. If not
              pre-registered in SODA, click on the
              <span class="highlight-text"> Click here to check xxx</span>
              dropdown option to look for the standard strain on
              <a
                href="https://scicrunch.org/resources"
                target="_blank"
                rel="nofollow"
                class="
                  hover:underline
                  text-blue-600
                  font-asap
                  dark:text-blue-400
                "
              >
                Scicrunch</a
              >
              as per the SPARC requirements. SODA will automatically pull out
              the RRID and include it in your subjects file when it is
              generated.
              <br />
              You may use the predetermined options to retrieve the correct RRID
              for your metadata file.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/7ba6a7fbb04547bd53c79f6f0003562cce8d013c3922412e60fb63bb69717f39/68747470733a2f2f692e6962622e636f2f70336a436b79502f696d6167652e706e67"
                />
              </div>

              If SODA does not already have the strain within the suggestion,
              please click on the dropdown option to allow SODA to retrieve the
              appropriate RRIDs.

              <div class="img-parent-div">
                <img
                  src="https://camo.githubusercontent.com/dd44cc7d70a105a5e03639e659d79e80b886ffc80227f774384832d3f04eba14/68747470733a2f2f692e6962622e636f2f7868714e714d372f696d6167652e706e67"
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          Exact age: enter a numerical value in the text field and select the
          unit from the dropdown list.
        </li>
      </ul>

      <div class="p-parent-div">
        <p>
          All other information is optional.
          <br />
          When done, click on the
          <span class="highlight-text"> Add subject </span> button. The added
          subject will be included in a table of subjects. You can
          edit/delete/copy existing subjects from the table using the buttons in
          the last column.
          <br />
          If all the subjects in your dataset have the same characteristics, you
          can copy information from one subject to another by clicking on the
          "Copy" image icon in the last column and providing the subject id for
          the new subject.
          <br />
          When all the subjects are added, click on the
          <span class="highlight-text"> Generate</span> button to create the
          subjects.xlsx file on your computer. You will be asked to include this
          file when organizing your dataset in the later steps.
          <br />
          The expected structure of this file, generated automatically by SODA,
          is explained in our corresponding
          <NuxtLink
            to="/sodaforsparc/docs/how-to/How-to-structure-the-subjects-metadata-file"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            How to</NuxtLink
          >
          page if you would like to learn about it.
        </p>
      </div>

      <base-docs-heading> B4. Prepare samples file </base-docs-heading>

      <div class="p-parent-div">
        <p>
          You can find this feature under
          <span class="highlight-text"> Create samples.xlsx</span>
          under the <span class="highlight-text"> Prepare Metadata</span> tab.
          The interface is very similar to the subjects.xlsx file feature. Click
          on
          <span class="highlight-text"> I want to start a new samples file</span
          >, then click on <span class="highlight-text"> Add a sample</span>. In
          the new interface, enter first the subject ID for this sample is
          derived from, then enter the unique samples ID for this sample.
        </p>
      </div>

      <ul class="docs-ul list-outside list-decimal">
        <li>Experimental setup: Enter applicable/available information.</li>
        <li>
          Specimen Information

          <ul class="docs-ul list-outside list-disc">
            <li>Specimen type: Select one from the dropdown list</li>
            <li>Specimen anatomical location: Type the location</li>
            <li>
              Species/strain/age: Follow instructions from the subjects.xlsx
              file feature
            </li>
          </ul>
        </li>
      </ul>

      <div class="p-parent-div">
        <p>
          All other information is optional.
          <br />
          When done, click on the
          <span class="highlight-text"> Add sample </span> button. The added
          sample will be included in a table of samples. You can
          edit/delete/copy existing samples from the table using the buttons in
          the last column.
          <br />
          If all the samples in your dataset have the same characteristics, you
          can copy information from one sample to another by clicking on the
          "Copy" image icon in the last column and providing the subject and
          sample ids for the new sample.
          <br />
          When all the subjects are added, click on the
          <span class="highlight-text"> Generate</span> button to create the
          samples.xlsx file on your computer. You will be asked to include this
          file when organizing your dataset in the later steps.
          <br />
          The expected structure of this file, generated automatically by SODA,
          is explained in our corresponding
          <NuxtLink
            to="/sodaforsparc/docs/how-to/How-to-structure-the-samples-metadata-file"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            How to</NuxtLink
          >
          page if you would like to learn about it.
        </p>
      </div>

      <base-docs-subtitle>
        Organize dataset according to the SPARC Dataset Structure (under the
        Prepare Datasets tab of the Free Form Mode)
      </base-docs-subtitle>

      <base-docs-heading> Background </base-docs-heading>

      <div class="p-parent-div">
        <p>
          All SPARC datasets must follow the top-level SPARC folder structure
          imposed by the
          <a
            href="https://docs.google.com/presentation/d/1EQPn1FmANpPsFt3CguU-JOQVMMlJsNXluQAK_gb2qVg/edit#slide=id.p1"
            target="_blank"
            rel="nofollow"
            class="hover:underline text-blue-600 font-asap dark:text-blue-400"
          >
            How to</a
          >. This top-level folder structure is shown in the figure below. If
          your data organization doesn't follow this structure inherently, you
          can create it virtually with SODA and then generate it directly on
          Pennsieve.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Prepare-dataset/Specify-files/SPARC-dataset-structure.PNG?raw=true"
        />
      </div>

      <div class="p-parent-div">
        <p>
          You can use the feature
          <span class="highlight-text"> Organize dataset</span> under the
          <span class="highlight-text"> Prepare Datasets</span> tab to
          accomplish this task.
        </p>
      </div>

      <base-docs-heading> Step 1: Getting Started </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Click on
          <span class="highlight-text"> Prepare a new dataset</span>. This
          option is used to start organizing and curating a new dataset. SODA
          will take you step-by-step through the curation process to organize
          your dataset, adding your metadata files, and generating your dataset
          onto Pennsieve.
        </p>
      </div>

      <base-docs-heading>
        Step 2: Specify high-level folders
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Select the high-level folder(s) to be included in your dataset. Refer
          to the description provided in the figure here about the content of
          each folder to determine which folder you need for your dataset. A
          high-level folder can only be included from Step 2 and removed from
          Step 3. You can always come back to this step to include more folders.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/high-level-folders-1.gif?raw=true"
        />
      </div>

      <base-docs-heading> Step 3: Structure dataset files </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Virtually structure your dataset using this interface as if you were
          organizing it on your computer but without actually modifying any
          local files. All your requested actions (files to be included, folders
          to be created, metadata information to be added, etc.) will be
          registered by SODA and only implemented when the dataset is generated
          during Step 6.
        </p>
      </div>

      <ul class="docs-ul list-outside list-disc">
        These are some of the functions you can do while you are in this step.

        <li>Go inside a folder by double-clicking on it.</li>
        <li>
          Import files/folders inside a folder using drag-and-drop or the
          "Import" menu located in the upper right corner.
        </li>
        <li>
          Create a new folder using the "New folder" button located in the upper
          right corner. Note that this is only possible inside a high-level
          SPARC folder. To create a new high-level SPARC folder, go back to Step
          2.
        </li>
        <li>
          Rename files/folders using the right-click menu option "Rename".
        </li>
        <li>
          Remove files/folders using the right-click menu option "Delete".
        </li>
        <li>Move files/folders using the right-click menu option "Move".</li>
        <li>
          Multiple-select files/folders by either drag-selecting items or
          holding Ctrl and clicking items.
        </li>

        <div class="img-parent-div">
          <img
            src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part1.gif?raw=true"
          />
        </div>

        <strong> Adding file descriptions (optional)</strong>
        <br />

        <li>
          Use the "Details" option from the right-click menu to see the actual
          path of the file and include metadata (description, Additional
          Metadata) which will be included in the manifest files if you request
          SODA to generate them automatically for you (Step 5).

          <div class="img-parent-div">
            <img
              src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step3-part2-files.gif?raw=true"
            />
          </div>
        </li>

        <li>
          Use the arrow located in the upper left corner to move up a folder.
          The current location in the dataset is indicated right next to the
          arrow.
        </li>
      </ul>

      <base-docs-heading>
        Step 4: Specify high-level metadata files
      </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Click on the applicable panel to include the high-level metadata files
          of your choice. Note that submission, dataset_description, and
          subjects files are mandatory for all datasets. The samples file is
          mandatory if applicable. The other files are optional.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/organize-step4-metadata-files.gif?raw=true"
        />
      </div>

      <base-docs-heading> Step 5: Request manifest files </base-docs-heading>

      <div class="p-parent-div">
        <p>
          To generate and include the mandatory manifest files automatically,
          simply toggle the option to "Yes". Note that any existing manifest
          files at the target location for generating the dataset will be
          replaced.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/fb2f030c12514bb1537b8b5ad1e14f4b983ca18e196b8fc45e732edf293eb52a/68747470733a2f2f692e6962622e636f2f3638686473564c2f6d616e69666573742d73637265656e73686f742e706e67"
        />
      </div>

      <base-docs-heading> Step 6: Generate dataset </base-docs-heading>

      <div class="p-parent-div">
        <p>
          Click on the
          <span class="highlight-text">
            Generate directly on Pennsieve option</span
          >
          and confirm your account.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://camo.githubusercontent.com/4fc9c5a061ed9992f3cef118c0b46a049bb613aef9e9a4c2a7016355141892ad/68747470733a2f2f692e6962622e636f2f797962776842482f696d6167652e706e67"
        />
      </div>

      <div class="p-parent-div">
        <p>
          Select
          <span class="highlight-text">
            I want to generate on an existing dataset</span
          >. If your dataset is not already selected, click on the edit icon
          next to Current dataset and select the dataset that you created
          previously.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/generate-3.gif?raw=true"
        />
      </div>

      <base-docs-heading> Step 7: Preview dataset </base-docs-heading>

      <div class="p-parent-div">
        <p>
          This step serves as a confirmation page before SODA generates your
          dataset. You can preview your dataset organization with specified
          SPARC metadata files and specified dataset generate options. This is
          how your dataset will look once it is generated either on Pennsieve.
          To edit any details from this step, simply click on the Edit icon next
          to a section. This will bring you back to the associated section for
          edits.
          <br />
          When you are ready to generate your dataset, click the Generate
          button. Wait here until the dataset is generated.
        </p>
      </div>

      <div class="img-parent-div">
        <img
          src="https://github.com/fairdataihub/SODA-for-SPARC/blob/main/docs/documentation/Organize-dataset/preview-dataset.PNG?raw=true"
        />
      </div>

      <div class="p-parent-div">
        <p>
          Once the dataset is generated, you will be prompted to share it with
          the Curation Team. Click on Yes.
        </p>
      </div>

      <base-docs-subtitle>
        Organize dataset according to the SPARC Dataset Structure (under the
        Prepare Datasets tab of the Free Form Mode)
      </base-docs-subtitle>

      <div class="p-parent-div">
        <p>
          You can find this feature under
          <span class="highlight-text"> Share with Curation Team</span> under
          the <span class="highlight-text"> Disseminate Datasets</span> tab. The
          dataset you created during step A2 should be automatically selected
          (you can select another one by clicking on the pencil symbol next to
          <span class="highlight-text"> Current dataset</span>). Simply click on
          <span class="highlight-text"> Share now</span> to share your dataset
          with the Curation Team for review.
        </p>
      </div>

      <div class="p-parent-div">
        <p>You are now done! Wait to hear back from the Curation Team.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
scrollToTop: true,
  layout: "docs"
};
</script>
