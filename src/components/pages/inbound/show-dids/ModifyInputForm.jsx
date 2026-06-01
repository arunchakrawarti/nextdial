import Input from '@/components/common/Input';
import React from 'react';
import Button from "@/components/common/Button"
import DidUsageInfo from './DidUsageInfo';

const ModifyInputForm = () => {
  return (
    <div>
      <div className="p-6 my-6 rounded-lg border-light font-lexend">
        <h2 className="text-dark heading font-lexend pb-3">
          MODIFY A DID RECORD: 3490484931
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {/* --- IMAGE 1 FIELDS --- */}
          <Input label="DID Extension:" name="didExtension" defaultValue="3490484931" />
          <Input label="DID Description:" name="didDescription" defaultValue="3490484931" />
          <Input label="DID Carrier Description:" name="didCarrierDescription" />
          <Input label="Active:" type="select" name="active" defaultValue="Y" options={["Y", "N"]} />
          <Input label="Admin User Group:" type="select" name="adminUserGroup" defaultValue="agent" options={["agent", "admin"]} />
          <Input label="DID Route:" type="select" name="didRoute" defaultValue="AGENT" options={["AGENT", "EXTEN", "VOICEMAIL", "PHONE"]} />
          <Input label="Record Call:" type="select" name="recordCall" defaultValue="Y" options={["Y", "N"]} />
          <Input label="Extension:" name="extension" defaultValue="9998811112" />
          <Input label="Extension Context:" name="extensionContext" defaultValue="default" />
          <Input label="Voicemail Box:" name="voicemailBox" placeholder="voicemail chooser" />
          <Input label="Phone Extension:" name="phoneExtension" />
          <Input label="Server IP:" type="select" name="serverIp" options={["", "127.0.0.1"]} placeholder="---NONE---" />
          <Input label="Call Menu:" type="select" name="callMenu" options={[]} placeholder="---NONE---" />
          <Input label="User Agent:" name="userAgent" />

          {/* --- IMAGE 2 FIELDS --- */}
          <Input label="User Unavailable Action:" type="select" name="userUnavailableAction" defaultValue="VOICEMAIL" options={["VOICEMAIL", "EXTEN"]} />
          <Input label="User Route Settings In-Group:" type="select" name="userRouteSettingsInGroup" options={[]} placeholder="---NONE---" />
          <Input label="In-Group ID:" type="select" name="inGroupId" options={[]} placeholder="---NONE---" />
          <Input label="In-Group Call Handle Method:" type="select" name="inGroupCallHandleMethod" defaultValue="CID" options={["CID", "ANI"]} />
          <Input label="In-Group Agent Search Method:" type="select" name="inGroupAgentSearchMethod" defaultValue="LB" options={["LB", "LO"]} />
          <Input label="In-Group List ID:" name="inGroupListId" defaultValue="999" />
          <Input label="In-Group Campaign ID:" type="select" name="inGroupCampaignId" options={[]} placeholder="---NONE---" />
          <Input label="In-Group Phone Code:" name="inGroupPhoneCode" defaultValue="1" />
          <Input label="Clean CID Number:" name="cleanCidNumber" />
          <Input label="Alter CID Name:" type="select" name="alterCidName" defaultValue="DISABLED" options={["DISABLED", "ENABLED"]} />
          <Input label="No-Agent In-Group Redirect:" type="select" name="noAgentInGroupRedirect" defaultValue="DISABLED" options={["DISABLED", "ENABLED"]} />

          {/* --- IMAGE 3 FIELDS --- */}
          <Input label="No-Agent In-Group ID:" type="select" name="noAgentInGroupId" options={[]} placeholder="---NONE---" />
          <Input label="No-Agent In-Group Extension:" name="noAgentInGroupExtension" defaultValue="9998811112" />
          <Input label="Max Queue In-Group Calls:" name="maxQueueInGroupCalls" defaultValue="0" />
          <Input label="Max Queue In-Group ID:" type="select" name="maxQueueInGroupId" options={[]} placeholder="---NONE---" />
          <Input label="Max Queue In-Group Extension:" name="maxQueueInGroupExtension" defaultValue="9998811112" />
          <Input label="Pre-Filter Phone Group ID:" type="select" name="preFilterPhoneGroupId" options={[]} placeholder="---NONE---" />
          <Input label="Pre-Filter Phone Group DID:" name="preFilterPhoneGroupDid" />
          <Input label="Pre-Filter Recent Call:" type="select" name="preFilterRecentCall" defaultValue="DISABLED" options={["DISABLED", "ENABLED"]} />
          <Input label="Pre-Filter Recent Call DID:" name="preFilterRecentCallDid" />
          <Input label="Filter Inbound Number:" type="select" name="filterInboundNumber" defaultValue="DISABLED" options={["DISABLED", "ENABLED"]} />

          {/* --- IMAGE 4 FIELDS --- */}
          <Input label="Filter Phone Group ID:" type="select" name="filterPhoneGroupId" options={[]} placeholder="---NONE---" />
          <Input label="Filter URL:" name="filterUrl" />
          <Input label="Filter URL DID Redirect:" type="select" name="filterUrlDidRedirect" defaultValue="N" options={["Y", "N"]} />
          <Input label="Filter DNC Campaign:" name="filterDncCampaign" />
          <Input label="Filter Action:" type="select" name="filterAction" defaultValue="EXTEN" options={["EXTEN", "AGENT", "VOICEMAIL"]} />
          <Input label="Filter Extension:" name="filterExtension" defaultValue="9998811112" />
          <Input label="Filter Extension Context:" name="filterExtensionContext" defaultValue="default" />
          <Input label="Filter Voicemail Box:" name="filterVoicemailBox" placeholder="voicemail chooser" />
          <Input label="Filter Phone Extension:" name="filterPhoneExtension" />
          <Input label="Filter Server IP:" type="select" name="filterServerIp" options={[]} placeholder="---NONE---" />
          <Input label="Filter Call Menu:" type="select" name="filterCallMenu" options={[]} placeholder="---NONE---" />
          <Input label="Filter User Agent:" name="filterUserAgent" />
          <Input label="Filter User Unavailable Action:" type="select" name="filterUserUnavailableAction" defaultValue="VOICEMAIL" options={["VOICEMAIL", "EXTEN"]} />
          <Input label="Filter User Route Settings In-Group:" type="select" name="filterUserRouteSettingsInGroup" defaultValue="AGENTDIRECT - Single Agent Direct Queue" options={["AGENTDIRECT - Single Agent Direct Queue"]} />
          <Input label="Filter In-Group ID:" type="select" name="filterInGroupId" options={[]} placeholder="---NONE---" />
          <Input label="Filter In-Group Call Handle Method:" type="select" name="filterInGroupCallHandleMethod" defaultValue="CID" options={["CID", "ANI"]} />
          <Input label="Filter In-Group Agent Search Method:" type="select" name="filterInGroupAgentSearchMethod" defaultValue="LB" options={["LB", "LO"]} />
          <Input label="Filter In-Group List ID:" name="filterInGroupListId" defaultValue="999" />
          <Input label="Filter In-Group Campaign ID:" type="select" name="filterInGroupCampaignId" options={[]} placeholder="---NONE---" />
          <Input label="Filter In-Group Phone Code:" name="filterInGroupPhoneCode" defaultValue="1" />

          <Input label="Custom 1:" name="custom1" />
          <Input label="Custom 2:" name="custom2" />
          <Input label="Custom 3:" name="custom3" />
          <Input label="Custom 4:" name="custom4" />
          <Input label="Custom 5:" name="custom5" />
          <div className="col-span-1 md:col-span-2 flex justify-end mt-6">
            <Button
              variant='gradient'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <DidUsageInfo/>
    </div>
  );
};

export default ModifyInputForm;