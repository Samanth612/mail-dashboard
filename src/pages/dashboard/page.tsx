import { useEffect, useState } from "react";
import { accounts } from "@/utils/data";
import { Mail } from "@/components/mail/mail";
import { store } from "@/store/store";
import { useSelector } from "react-redux";
import { config } from "@/config";

export default function MailPage() {
  const [defaultLayout, setDefaultLayout] = useState<any>(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState<any>(undefined);
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const authToken = useSelector((state: any) => state.auth.token);
  const mailData = useSelector((state: any) => state?.mails);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const token = authToken;
        const response = await fetch(`${config?.API_ENDPOINT}/api/mails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add Authorization header
          },
        });
        if (!response.ok) throw new Error("Failed to fetch mails");
        const data = await response.json();
        setMails(data);
        store.dispatch({
          type: "setMails",
          payload: data,
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (mailData?.length) {
      setMails(mailData);
    } else {
      fetchMails();
    }
  }, [mailData]);

  useEffect(() => {
    const layout = localStorage.getItem("react-resizable-panels:layout:mail");
    const collapsed = localStorage.getItem("react-resizable-panels:collapsed");

    if (layout) setDefaultLayout(JSON.parse(layout));
    if (collapsed) setDefaultCollapsed(JSON.parse(collapsed));
  }, []);

  return (
    <>
      <div className="md:hidden">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
