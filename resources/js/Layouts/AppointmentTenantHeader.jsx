import React from "react";
import { Link as RouterLink } from "react-router-dom";

const iconCommonStyle = {
    fontSize: "24px",
    color: "#fff",
    marginLeft: "1rem",
};

const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    marginTop: "2rem",
};

const linkStyle = {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: "large",
    marginRight: "1rem",
    textDecoration: "none",
};

const AppointmentTenantHeader = () => {
    return (
        <div>
            <h1
                style={{
                    color: "white",
                    fontSize: "44px",
                }}
            >
                My Todo App
            </h1>

            <div style={headerStyle}>
                <nav aria-label="breadcrumb">
                    <div
                        style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            borderRadius: "25px",
                            padding: "8px",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            margin: "0",
                            border: "#FF61C0 1px solid",
                        }}
                    >
                        <RouterLink to="/appointment-tenant" style={linkStyle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={iconCommonStyle}
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2L1 9l2 1 1 9 5-4 5 4 1-9 2-1-11-7zm0 2.176l8 5.92v10.706h-3v-9h-6v9h-3V9.095l8-5.92z"
                                />
                            </svg>
                            All
                        </RouterLink>
                    </div>

                    <div
                        style={{
                            backgroundColor: "rgba(169, 169, 169, 0.3)",
                            borderRadius: "25px",
                            padding: "8px",
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            margin: "0",
                            border: "#FF61C0 1px solid",
                        }}
                    >
                        <RouterLink to="/calendar" style={linkStyle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={iconCommonStyle}
                            >
                                <path
                                    fill="currentColor"
                                    d="M6.998 1h-2v2h2v-2zm0 3h-2v2h2v-2zm7-3h-2v2h2v-2zm0 3h-2v2h2v-2zm4-3h-2v2h2v-2zm0 3h-2v2h2v-2zm0 4h-10v10h10v-10zm-1 9h-8v-8h8v8zm1-9h-2v2h2v-2zm0 3h-2v2h2v-2zm-3-3h-2v2h2v-2zm0 3h-2v2h2v-2zm-3-3h-2v2h2v-2zm0 3h-2v2h2v-2zm-3-3h-2v2h2v-2zm0 3h-2v2h2v-2z"
                                />
                            </svg>
                            Calendar
                        </RouterLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AppointmentTenantHeader;
