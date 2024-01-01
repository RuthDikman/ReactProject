import { observable, makeObservable, action } from "mobx";
import Swal from "sweetalert2";
class AppStore {
  listServices = [
    { name: "שליחויות מהיום למחר", icon: "LocalShippingOutlined" },
    { name: "שליחויות משפטיות", icon: "GavelRounded" },
    { name: "שליחויות מהיום להיום", icon: "DepartureBoardRounded" },
    { name: "שליחויות לעסקים קטנים", icon: "TwoWheeler" },
    { name: "שליחויות לנקודות חלוקה", icon: "RvHookup" },
  ];
  listBusinessData = {
    name: "DBH",
    address: "פועלי ציון 1 | הרצליה",
    phone: "059319319",
    owner: "Admin",
    description: "שליחויות ולוגיסטיקה",
  };
  listOrders = [];

  constructor() {
    makeObservable(this, {
      listServices: observable,
      postService: action,
      listBusinessData: observable,
      postBusinessData: action,
      getBusinessData: action,
      listOrders: observable,
      postOrders: action,
      getOrders: action,
      initialBasisServices: action,
    });
    const fetchBusinessDataExists = async () => {
      const bus = await this.getBusinessData();
      if (Object.keys(bus).length === 0) {
        this.postBusinessData(this.listBusinessData);
      } else {
        this.listBusinessData = bus;
      }
    };
    const fetchServicesExists = async () => {
      const ser = await this.getService();
      if (ser.length === 0) {
        this.listServices.forEach((service) =>
          this.initialBasisServices(service)
        );
      } else {
        this.listServices = ser;
      }
    };
    fetchBusinessDataExists();
    fetchServicesExists();
  }
  postBusinessData = async (businessData) => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify(businessData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      this.listBusinessData = businessData;
    }
  };
  getBusinessData = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    if (response.status === 200) {
      const business = await response.json();
      return business;
    } else {
      return null;
    }
  };
  initialBasisServices = async (ser) => {
    const responses = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(ser),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  postService = async (ser) => {
    const responses = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(ser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (responses.status === 200) {
      this.listServices = [...this.listServices, ser];
      let timerInterval;
      Swal.fire({
        title: "המתן בזמן שאנו מעדכנים את פרטי השרות",
        html: ".זה עשוי לקחת מספר שניות",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } else if (responses.status == 400) {
      {
        Swal.fire({
          title: "Error",
          text: "השירות כבר קיים במערכת",
          icon: "error",
        });
      }
    }
  };
  getService = async () => {
    const response = await fetch("http://localhost:8787/services");
    if (response.status === 200) {
      const serv = await response.json();
      return serv;
    } else {
      return null;
    }
  };
  postOrders = async (ord) => {
    let order = {
      name: ord["username"],
      identity: ord["identity"],
      type: ord["type"],
      dateTime: ord["deliveryDate"],
      email: ord["email"],
      phone: ord["phone"],
      address: ord["address"],
    };
    const responses = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (responses.status === 200) {
      this.listOrders = [...this.listOrders, order];
      let timerInterval;
      Swal.fire({
        title: "המתן בזמן שאנו מעדכנים את פרטי ההזמנה",
        html: ".זה עשוי לקחת מספר שניות",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    } else if (responses.status == 400) {
      {
        Swal.fire({
          title: "Error",
          text: ".לא ניתן לבצע את השליחות במועד שנבחר",
          text: ".התאריך כבר מופיע ביומן במערכת",
          icon: "error",
        });
      }
    }
  };

  getOrders = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    this.listOrders = [...data].sort(
      (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
    );
  };
}

export default new AppStore();
